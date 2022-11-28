import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallAnalyticsJobStatusEnum } from "./callanalyticsjobstatusenum";
import { ChannelDefinition } from "./channeldefinition";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Media } from "./media";
import { MediaFormatEnum } from "./mediaformatenum";
import { CallAnalyticsJobSettings } from "./callanalyticsjobsettings";
import { Transcript } from "./transcript";



// CallAnalyticsJob
/** 
 * Describes an asynchronous analytics job that was created with the <code>StartAnalyticsJob</code> operation.
**/
export class CallAnalyticsJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobName" })
  callAnalyticsJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=CallAnalyticsJobStatus" })
  callAnalyticsJobStatus?: CallAnalyticsJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ChannelDefinitions", elemType: ChannelDefinition })
  channelDefinitions?: ChannelDefinition[];

  @SpeakeasyMetadata({ data: "json, name=CompletionTime" })
  completionTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataAccessRoleArn" })
  dataAccessRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentifiedLanguageScore" })
  identifiedLanguageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: LanguageCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Media" })
  media?: Media;

  @SpeakeasyMetadata({ data: "json, name=MediaFormat" })
  mediaFormat?: MediaFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=MediaSampleRateHertz" })
  mediaSampleRateHertz?: number;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: CallAnalyticsJobSettings;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Transcript" })
  transcript?: Transcript;
}
