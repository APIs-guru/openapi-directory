import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";



// Resources
/** 
 * Machine resources for a version.
**/
export class Resources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=diskGb" })
  diskGb?: number;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyReference" })
  kmsKeyReference?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}
