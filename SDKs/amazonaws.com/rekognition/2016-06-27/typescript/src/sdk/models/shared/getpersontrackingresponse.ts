import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { PersonDetection } from "./persondetection";
import { VideoMetadata } from "./videometadata";



export class GetPersonTrackingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: VideoJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Persons", elemType: PersonDetection })
  persons?: PersonDetection[];

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=VideoMetadata" })
  videoMetadata?: VideoMetadata;
}
