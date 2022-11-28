import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedS3Resource } from "./faileds3resource";



export class AssociateS3ResourcesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedS3Resources", elemType: FailedS3Resource })
  failedS3Resources?: FailedS3Resource[];
}
