# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CreateCallAnalyticsCategoryRequest{
        Headers: operations.CreateCallAnalyticsCategoryHeaders{
            XAmzAlgorithm: "nobis",
            XAmzContentSha256: "necessitatibus",
            XAmzCredential: "sit",
            XAmzDate: "minima",
            XAmzSecurityToken: "sint",
            XAmzSignature: "voluptatum",
            XAmzSignedHeaders: "in",
            XAmzTarget: "Transcribe.CreateCallAnalyticsCategory",
        },
        Request: shared.CreateCallAnalyticsCategoryRequest{
            CategoryName: "sint",
            Rules: []shared.Rule{
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 5112847521852491111,
                            First: 9066531866989888037,
                            Last: 8591367330895586193,
                            StartTime: 8554633155131254918,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 548920835639829848,
                            First: 8896873407592968713,
                            Last: 4331457503922561740,
                            StartPercentage: 6503471214168128428,
                        },
                        Threshold: 1611122744689441508,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4660955790970932673,
                            First: 3342685118662395877,
                            Last: 2291230178030447149,
                            StartTime: 7016791748015600340,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 1992443270753785053,
                            First: 1976051185898035910,
                            Last: 1818415603160825641,
                            StartPercentage: 6199324781541953639,
                        },
                        Threshold: 8260330288597738611,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 4604726166308333701,
                            First: 3904959679002859803,
                            Last: 2479749284676595074,
                            StartTime: 5679422250428121759,
                        },
                        Negate: true,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3353722794698886839,
                            First: 2914775900405348494,
                            Last: 502403389146556131,
                            StartPercentage: 242395787493867852,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEGATIVE",
                            "MIXED",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 967267725031621866,
                            First: 2208301086835921951,
                            Last: 633697944315790879,
                            StartTime: 3422064738534861846,
                        },
                        Negate: true,
                        ParticipantRole: "AGENT",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 3625585094652647255,
                            First: 5055426411805064244,
                            Last: 8858313994804781107,
                            StartPercentage: 1513134852503741179,
                        },
                        Targets: []string{
                            "accusantium",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
                shared.Rule{
                    InterruptionFilter: &shared.InterruptionFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 7125241773315148533,
                            First: 1468837794741711077,
                            Last: 2214011053113931459,
                            StartTime: 5374795006375433277,
                        },
                        Negate: true,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 7424948807662580944,
                            First: 6460737378073047685,
                            Last: 1752625050475367828,
                            StartPercentage: 5240284290571592368,
                        },
                        Threshold: 8520036234026697246,
                    },
                    NonTalkTimeFilter: &shared.NonTalkTimeFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 8830599137710403571,
                            First: 1588297527028220372,
                            Last: 842310474408359308,
                            StartTime: 8161614694984277638,
                        },
                        Negate: false,
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 498062244375343662,
                            First: 5205376558963411784,
                            Last: 7409742966167503346,
                            StartPercentage: 5266676331517298008,
                        },
                        Threshold: 9138572064484930537,
                    },
                    SentimentFilter: &shared.SentimentFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 6687938420670924103,
                            First: 5733011801104656323,
                            Last: 6848149104322516630,
                            StartTime: 8735932067059293336,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 8209202154438861827,
                            First: 1375460254637238916,
                            Last: 5269112052122541663,
                            StartPercentage: 1589574292723170221,
                        },
                        Sentiments: []shared.SentimentValueEnum{
                            "NEUTRAL",
                            "MIXED",
                            "POSITIVE",
                        },
                    },
                    TranscriptFilter: &shared.TranscriptFilter{
                        AbsoluteTimeRange: &shared.AbsoluteTimeRange{
                            EndTime: 3630973581834087525,
                            First: 1829556787825643552,
                            Last: 7808682057497433609,
                            StartTime: 7349903160678998265,
                        },
                        Negate: false,
                        ParticipantRole: "CUSTOMER",
                        RelativeTimeRange: &shared.RelativeTimeRange{
                            EndPercentage: 4295981913159720682,
                            First: 4756842064992291098,
                            Last: 4533488582174557333,
                            StartPercentage: 6894329672744535763,
                        },
                        Targets: []string{
                            "nam",
                            "dolores",
                            "id",
                        },
                        TranscriptFilterType: "EXACT",
                    },
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateCallAnalyticsCategory(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCallAnalyticsCategoryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateCallAnalyticsCategory` - Creates an analytics category. Amazon Transcribe applies the conditions specified by your analytics categories to your call analytics jobs. For each analytics category, you specify one or more rules. For example, you can specify a rule that the customer sentiment was neutral or negative within that category. If you start a call analytics job, Amazon Transcribe applies the category to the analytics job that you've specified.
* `CreateLanguageModel` - Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your input files. The time it takes to create your model depends on the size of your training data.
* `CreateMedicalVocabulary` - Creates a new custom vocabulary that you can use to modify how Amazon Transcribe Medical transcribes your audio file.
* `CreateVocabulary` - Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles transcription of an audio file.
* `CreateVocabularyFilter` - Creates a new vocabulary filter that you can use to filter words, such as profane words, from the output of a transcription job.
* `DeleteCallAnalyticsCategory` - Deletes a call analytics category using its name.
* `DeleteCallAnalyticsJob` - Deletes a call analytics job using its name.
* `DeleteLanguageModel` - Deletes a custom language model using its name.
* `DeleteMedicalTranscriptionJob` - Deletes a transcription job generated by Amazon Transcribe Medical and any related information.
* `DeleteMedicalVocabulary` - Deletes a vocabulary from Amazon Transcribe Medical.
* `DeleteTranscriptionJob` - Deletes a previously submitted transcription job along with any other generated results such as the transcription, models, and so on.
* `DeleteVocabulary` - Deletes a vocabulary from Amazon Transcribe. 
* `DeleteVocabularyFilter` - Removes a vocabulary filter.
* `DescribeLanguageModel` - Gets information about a single custom language model. Use this information to see details about the language model in your Amazon Web Services account. You can also see whether the base language model used to create your custom language model has been updated. If Amazon Transcribe has updated the base model, you can create a new custom language model using the updated base model. If the language model wasn't created, you can use this operation to understand why Amazon Transcribe couldn't create it. 
* `GetCallAnalyticsCategory` - Retrieves information about a call analytics category.
* `GetCallAnalyticsJob` - Returns information about a call analytics job. To see the status of the job, check the <code>CallAnalyticsJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable personally identifiable information (PII) redaction, the redacted transcript appears in the <code>RedactedTranscriptFileUri</code> field.
* `GetMedicalTranscriptionJob` - Returns information about a transcription job from Amazon Transcribe Medical. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished. You find the results of the completed job in the <code>TranscriptFileUri</code> field.
* `GetMedicalVocabulary` - Retrieves information about a medical vocabulary.
* `GetTranscriptionJob` - Returns information about a transcription job. To see the status of the job, check the <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>, the job is finished and you can find the results at the location specified in the <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted transcript appears in <code>RedactedTranscriptFileUri</code>.
* `GetVocabulary` - Gets information about a vocabulary. 
* `GetVocabularyFilter` - Returns information about a vocabulary filter.
* `ListCallAnalyticsCategories` - Provides more information about the call analytics categories that you've created. You can use the information in this list to find a specific category. You can then use the operation to get more information about it.
* `ListCallAnalyticsJobs` - List call analytics jobs with a specified status or substring that matches their names.
* `ListLanguageModels` - Provides more information about the custom language models you've created. You can use the information in this list to find a specific custom language model. You can then use the operation to get more information about it.
* `ListMedicalTranscriptionJobs` - Lists medical transcription jobs with a specified status or substring that matches their names.
* `ListMedicalVocabularies` - Returns a list of vocabularies that match the specified criteria. If you don't enter a value in any of the request parameters, returns the entire list of vocabularies.
* `ListTagsForResource` - Lists all tags associated with a given transcription job, vocabulary, or resource.
* `ListTranscriptionJobs` - Lists transcription jobs with the specified status.
* `ListVocabularies` - Returns a list of vocabularies that match the specified criteria. If no criteria are specified, returns the entire list of vocabularies.
* `ListVocabularyFilters` - Gets information about vocabulary filters.
* `StartCallAnalyticsJob` - Starts an asynchronous analytics job that not only transcribes the audio recording of a caller and agent, but also returns additional insights. These insights include how quickly or loudly the caller or agent was speaking. To retrieve additional insights with your analytics jobs, create categories. A category is a way to classify analytics jobs based on attributes, such as a customer's sentiment or a particular phrase being used during the call. For more information, see the operation. 
* `StartMedicalTranscriptionJob` - Starts a batch job to transcribe medical speech to text.
* `StartTranscriptionJob` - Starts an asynchronous job to transcribe speech to text.
* `TagResource` - Tags a Amazon Transcribe resource with the given list of tags.
* `UntagResource` - Removes specified tags from a specified Amazon Transcribe resource.
* `UpdateCallAnalyticsCategory` - Updates the call analytics category with new values. The <code>UpdateCallAnalyticsCategory</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `UpdateMedicalVocabulary` - Updates a vocabulary with new values that you provide in a different text file from the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request.
* `UpdateVocabulary` - Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code> operation overwrites all of the existing information with the values that you provide in the request. 
* `UpdateVocabularyFilter` - Updates a vocabulary filter with a new list of filtered words.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
