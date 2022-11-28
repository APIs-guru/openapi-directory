# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateDatasetRequest(
    headers=operations.CreateDatasetHeaders(
        x_amz_algorithm="atque",
        x_amz_content_sha256="vel",
        x_amz_credential="itaque",
        x_amz_date="ut",
        x_amz_security_token="ut",
        x_amz_signature="unde",
        x_amz_signed_headers="aut",
        x_amz_target="AWSLookoutEquipmentFrontendService.CreateDataset",
    ),
    request=shared.CreateDatasetRequest(
        client_token="maiores",
        dataset_name="repellendus",
        dataset_schema=shared.DatasetSchema(
            inline_data_schema="ducimus",
        ),
        server_side_kms_key_id="repudiandae",
        tags=[
            shared.Tag(
                key="et",
                value="rem",
            ),
            shared.Tag(
                key="quas",
                value="animi",
            ),
        ],
    ),
)
    
res = s.sdk.create_dataset(req)

if res.create_dataset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_dataset` - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data. 
* `create_inference_scheduler` -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data. 
* `create_model` - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
* `delete_dataset` -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future. 
* `delete_inference_scheduler` - Deletes an inference scheduler that has been set up. Already processed output results are not affected. 
* `delete_model` - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up. 
* `describe_data_ingestion_job` - Provides information on a specific data ingestion job such as creation time, dataset ARN, status, and so on. 
* `describe_dataset` - Provides a JSON description of the data that is in each time series dataset, including names, column names, and data types.
* `describe_inference_scheduler` -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata 
* `describe_model` - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on. 
* `list_data_ingestion_jobs` - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on. 
* `list_datasets` - Lists all datasets currently available in your account, filtering on the dataset name. 
* `list_inference_executions` -  Lists all inference executions that have been performed by the specified inference scheduler. 
* `list_inference_schedulers` - Retrieves a list of all inference schedulers currently available for your account. 
* `list_models` - Generates a list of all models in the account, including model name and ARN, dataset, and status. 
* `list_tags_for_resource` - Lists all the tags for a specified resource, including key and value. 
* `start_data_ingestion_job` - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. 
* `start_inference_scheduler` - Starts an inference scheduler. 
* `stop_inference_scheduler` - Stops an inference scheduler. 
* `tag_resource` - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource. 
* `untag_resource` - Removes a specific tag from a given resource. The tag is specified by its key. 
* `update_inference_scheduler` - Updates an inference scheduler. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
