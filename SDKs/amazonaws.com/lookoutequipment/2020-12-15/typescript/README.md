# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CreateDatasetRequest, CreateDatasetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateDatasetRequest = {
  headers: {
    xAmzAlgorithm: "atque",
    xAmzContentSha256: "vel",
    xAmzCredential: "itaque",
    xAmzDate: "ut",
    xAmzSecurityToken: "ut",
    xAmzSignature: "unde",
    xAmzSignedHeaders: "aut",
    xAmzTarget: "AWSLookoutEquipmentFrontendService.CreateDataset",
  },
  request: {
    clientToken: "maiores",
    datasetName: "repellendus",
    datasetSchema: {
      inlineDataSchema: "ducimus",
    },
    serverSideKmsKeyId: "repudiandae",
    tags: [
      {
        key: "et",
        value: "rem",
      },
      {
        key: "quas",
        value: "animi",
      },
    ],
  },
};

sdk.sdk.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createDataset` - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 
* `createInferenceScheduler` -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 
* `createModel` - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
* `deleteDataset` -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 
* `deleteInferenceScheduler` - Deletes an inference scheduler that has been set up. Already processed output results are not affected. 
* `deleteModel` - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 
* `describeDataIngestionJob` - Provides information on a specific data ingestion job such as creation time, dataset ARN, status, and so on. 
* `describeDataset` - Provides a JSON description of the data that is in each time series dataset, including names, column names, and data types.
* `describeInferenceScheduler` -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 
* `describeModel` - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 
* `listDataIngestionJobs` - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 
* `listDatasets` - Lists all datasets currently available in your account, filtering on the dataset name. 
* `listInferenceExecutions` -  Lists all inference executions that have been performed by the specified inference scheduler. 
* `listInferenceSchedulers` - Retrieves a list of all inference schedulers currently available for your account. 
* `listModels` - Generates a list of all models in the account, including model name and ARN, dataset, and status. 
* `listTagsForResource` - Lists all the tags for a specified resource, including key and value. 
* `startDataIngestionJob` - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 
* `startInferenceScheduler` - Starts an inference scheduler. 
* `stopInferenceScheduler` - Stops an inference scheduler. 
* `tagResource` - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 
* `untagResource` - Removes a specific tag from a given resource. The tag is specified by its key. 
* `updateInferenceScheduler` - Updates an inference scheduler. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
