import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SparkLoggingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
