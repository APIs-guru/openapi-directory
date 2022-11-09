import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AlgorithmVersionInfoStatusEnum {
    Required = "REQUIRED"
,    Discouraged = "DISCOURAGED"
}


// AlgorithmVersionInfo
/** 
 * Algorithm information
**/
export class AlgorithmVersionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=status" })
  status: AlgorithmVersionInfoStatusEnum;

  @Metadata({ data: "json, name=version" })
  version: string;
}
