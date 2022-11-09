import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectEntityGlobalAccessEnum {
    None = "none"
,    AnyoneWithRead = "anyone_with_read"
,    AnyoneWithFull = "anyone_with_full"
}


// ProjectEntity
/** 
 * List Projects
**/
export class ProjectEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=global_access" })
  globalAccess?: ProjectEntityGlobalAccessEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
