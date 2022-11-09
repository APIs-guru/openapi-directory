import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volume } from "./volume";


// Resources
/** 
 * Machine resources for a version.
**/
export class Resources extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=diskGb" })
  diskGb?: number;

  @Metadata({ data: "json, name=kmsKeyReference" })
  kmsKeyReference?: string;

  @Metadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}
