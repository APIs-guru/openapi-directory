import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerConfigurationRevisionSummary
/** 
 * The summary of a worker configuration revision.
**/
export class WorkerConfigurationRevisionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
