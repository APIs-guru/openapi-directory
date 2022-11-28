import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectEntityGlobalAccessEnum {
    None = "none",
    AnyoneWithRead = "anyone_with_read",
    AnyoneWithFull = "anyone_with_full"
}


// ProjectEntity
/** 
 * List Projects
**/
export class ProjectEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=global_access" })
  globalAccess?: ProjectEntityGlobalAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
