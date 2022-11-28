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
import { CreateCallAnalyticsCategoryRequest, CreateCallAnalyticsCategoryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateCallAnalyticsCategoryRequest = {
  headers: {
    xAmzAlgorithm: "nobis",
    xAmzContentSha256: "necessitatibus",
    xAmzCredential: "sit",
    xAmzDate: "minima",
    xAmzSecurityToken: "sint",
    xAmzSignature: "voluptatum",
    xAmzSignedHeaders: "in",
    xAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
  },
  request: {
    categoryName: "sint",
    rules: [
      {
        interruptionFilter: {
          absoluteTimeRange: {
            endTime: 5112847521852491111,
            first: 9066531866989888037,
            last: 8591367330895586193,
            startTime: 8554633155131254918,
          },
          negate: false,
          participantRole: "CUSTOMER",
          relativeTimeRange: {
            endPercentage: 548920835639829848,
            first: 8896873407592968713,
            last: 4331457503922561740,
            startPercentage: 6503471214168128428,
          },
          threshold: 1611122744689441508,
        },
        nonTalkTimeFilter: {
          absoluteTimeRange: {
            endTime: 4660955790970932673,
            first: 3342685118662395877,
            last: 2291230178030447149,
            startTime: 7016791748015600340,
          },
          negate: false,
          relativeTimeRange: {
            endPercentage: 1992443270753785053,
            first: 1976051185898035910,
            last: 1818415603160825641,
            startPercentage: 6199324781541953639,
          },
          threshold: 8260330288597738611,
        },
        sentimentFilter: {
          absoluteTimeRange: {
            endTime: 4604726166308333701,
            first: 3904959679002859803,
            last: 2479749284676595074,
            startTime: 5679422250428121759,
          },
          negate: true,
          participantRole: "CUSTOMER",
          relativeTimeRange: {
            endPercentage: 3353722794698886839,
            first: 2914775900405348494,
            last: 502403389146556131,
            startPercentage: 242395787493867852,
          },
          sentiments: [
            "NEGATIVE",
            "MIXED",
          ],
        },
        transcriptFilter: {
          absoluteTimeRange: {
            endTime: 967267725031621866,
            first: 2208301086835921951,
            last: 633697944315790879,
            startTime: 3422064738534861846,
          },
          negate: true,
          participantRole: "AGENT",
          relativeTimeRange: {
            endPercentage: 3625585094652647255,
            first: 5055426411805064244,
            last: 8858313994804781107,
            startPercentage: 1513134852503741179,
          },
          targets: [
            "accusantium",
          ],
          transcriptFilterType: "EXACT",
        },
      },
      {
        interruptionFilter: {
          absoluteTimeRange: {
            endTime: 7125241773315148533,
            first: 1468837794741711077,
            last: 2214011053113931459,
            startTime: 5374795006375433277,
          },
          negate: true,
          participantRole: "CUSTOMER",
          relativeTimeRange: {
            endPercentage: 7424948807662580944,
            first: 6460737378073047685,
            last: 1752625050475367828,
            startPercentage: 5240284290571592368,
          },
          threshold: 8520036234026697246,
        },
        nonTalkTimeFilter: {
          absoluteTimeRange: {
            endTime: 8830599137710403571,
            first: 1588297527028220372,
            last: 842310474408359308,
            startTime: 8161614694984277638,
          },
          negate: false,
          relativeTimeRange: {
            endPercentage: 498062244375343662,
            first: 5205376558963411784,
            last: 7409742966167503346,
            startPercentage: 5266676331517298008,
          },
          threshold: 9138572064484930537,
        },
        sentimentFilter: {
          absoluteTimeRange: {
            endTime: 6687938420670924103,
            first: 5733011801104656323,
            last: 6848149104322516630,
            startTime: 8735932067059293336,
          },
          negate: false,
          participantRole: "CUSTOMER",
          relativeTimeRange: {
            endPercentage: 8209202154438861827,
            first: 1375460254637238916,
            last: 5269112052122541663,
            startPercentage: 1589574292723170221,
          },
          sentiments: [
            "NEUTRAL",
            "MIXED",
            "POSITIVE",
          ],
        },
        transcriptFilter: {
          absoluteTimeRange: {
            endTime: 3630973581834087525,
            first: 1829556787825643552,
            last: 7808682057497433609,
            startTime: 7349903160678998265,
          },
          negate: false,
          participantRole: "CUSTOMER",
          relativeTimeRange: {
            endPercentage: 4295981913159720682,
            first: 4756842064992291098,
            last: 4533488582174557333,
            startPercentage: 6894329672744535763,
          },
          targets: [
            "nam",
            "dolores",
            "id",
          ],
          transcriptFilterType: "EXACT",
        },
      },
    ],
  },
};

sdk.sdk.createCallAnalyticsCategory(req).then((res: CreateCallAnalyticsCategoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createCallAnalyticsCategory` - Creates an analytics category. Amazon Transcribe applies the conditions specified by your analytics categories to your call analytics jobs. For each analytics category, you specify one or more rules. For example, you can specify a rule that the customer sentiment was neutral or negative within that category. If you start a call analytics job, Amazon Transcribe applies the category to the analytics job that you've specified.
* `createLanguageModel` - Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your input files. The time it takes to create your model depends on the size of your training data.
* `createMedicalVocabulary` - Creates a new custom vocabulary that you can use to modify how Amazon Transcribe Medical transcribes your audio file.
* `createVocabulary` - Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
* `createVocabularyFilter` - Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of a transcription job.
* `deleteCallAnalyticsCategory` - Deletes a call analytics category using its name.
* `deleteCallAnalyticsJob` - Deletes a call analytics job using its name.
* `deleteLanguageModel` - Deletes a custom language model using its name.
* `deleteMedicalTranscriptionJob` - Deletes a transcription job generated by Amazon Transcribe Medical and any related information.
* `deleteMedicalVocabulary` - Deletes a vocabulary from Amazon Transcribe Medical.
* `deleteTranscriptionJob` - Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
* `deleteVocabulary` - Deletes a vocabulary from Amazon Transcribe. 
* `deleteVocabularyFilter` - Removes a vocabulary filter.
* `describeLanguageModel` - Gets information about a single custom language model. Use this information to see details about the language model in your Amazon Web Services account. You can also see whether the base language model used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If the language model wasn't created, you can use this operation to understand why Amazon Transcribe couldn't create it. 
* `getCallAnalyticsCategory` - Retrieves information about a call analytics category.
* `getCallAnalyticsJob` - Returns information about a call analytics job. To see the status of the job, check the <code>CallAnalyticsJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable personally identifiable information (PII) redaction, the redacted transcript appears in the <code>RedactedTranscriptFileUri</code> field.
* `getMedicalTranscriptionJob` - Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You find the results of the completed job in the <code>TranscriptFileUri</code> field.
* `getMedicalVocabulary` - Retrieves information about a medical vocabulary.
* `getTranscriptionJob` - Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.
* `getVocabulary` - Gets information about a vocabulary. 
* `getVocabularyFilter` - Returns information about a vocabulary filter.
* `listCallAnalyticsCategories` - Provides more information about the call analytics categories that you've created. You can use the information in this list to find a specific category. You can then use the operation to get more information about it.
* `listCallAnalyticsJobs` - List call analytics jobs with a specified status or substring that matches their names.
* `listLanguageModels` - Provides more information about the custom language models you've created. You can use the information in this list to find a specific custom language model. You can then use the operation to get more information about it.
* `listMedicalTranscriptionJobs` - Lists medical transcription jobs with a specified status or substring that matches their names.
* `listMedicalVocabularies` - Returns a list of vocabularies that match the specified criteria. If you don't enter a value in any of the request parameters, returns the entire list of vocabularies.
* `listTagsForResource` - Lists all tags associated with a given transcription job, vocabulary, or resource.
* `listTranscriptionJobs` - Lists transcription jobs with the specified status.
* `listVocabularies` - Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
* `listVocabularyFilters` - Gets information about vocabulary filters.
* `startCallAnalyticsJob` - Starts an asynchronous analytics job that not only transcribes the audio recording of a caller and agent, but also returns additional insights. These insights include how quickly or loudly the caller or agent was speaking. To retrieve additional insights with your analytics jobs, create categories. A category is a way to classify analytics jobs based on attributes, such as a customer's sentiment or a particular phrase being used during the call. For more information, see the operation. 
* `startMedicalTranscriptionJob` - Starts a batch job to transcribe medical speech to text.
* `startTranscriptionJob` - Starts an asynchronous job to transcribe speech to text.
* `tagResource` - Tags a Amazon Transcribe resource with the given list of tags.
* `untagResource` - Removes specified tags from a specified Amazon Transcribe resource.
* `updateCallAnalyticsCategory` - Updates the call analytics category with new values. The <code>UpdateCallAnalyticsCategory</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `updateMedicalVocabulary` - Updates a vocabulary with new values that you provide in a different text file from the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
* `updateVocabulary` - Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `updateVocabularyFilter` - Updates a vocabulary filter with a new list of filtered words.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
