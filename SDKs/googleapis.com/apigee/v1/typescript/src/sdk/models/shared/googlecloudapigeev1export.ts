import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1Export
/** 
 * Details of an export job.
**/
export class GoogleCloudApigeeV1Export extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=datastoreName" })
  datastoreName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=executionTime" })
  executionTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}
