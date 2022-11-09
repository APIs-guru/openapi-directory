import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopEdgePackagingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EdgePackagingJobName" })
  edgePackagingJobName: string;
}
