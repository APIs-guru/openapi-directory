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
import { DeleteLexiconRequest, DeleteLexiconResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteLexiconRequest = {
  pathParams: {
    lexiconName: "sequi",
  },
  headers: {
    xAmzAlgorithm: "non",
    xAmzContentSha256: "a",
    xAmzCredential: "recusandae",
    xAmzDate: "molestias",
    xAmzSecurityToken: "quis",
    xAmzSignature: "dolores",
    xAmzSignedHeaders: "sint",
  },
};

sdk.sdk.deleteLexicon(req).then((res: DeleteLexiconResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteLexicon` - <p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
* `describeVoices` - <p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>
* `getLexicon` - Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
* `getSpeechSynthesisTask` - Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.
* `listLexicons` - Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
* `listSpeechSynthesisTasks` - Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.
* `putLexicon` - <p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
* `startSpeechSynthesisTask` - Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.
* `synthesizeSpeech` - Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
