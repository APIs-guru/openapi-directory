import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CelebrityRecognition } from "./celebrityrecognition";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";



export class GetCelebrityRecognitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Celebrities", elemType: CelebrityRecognition })
  celebrities?: CelebrityRecognition[];

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
