import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SparkLoggingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=project_id" })
  projectId?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
