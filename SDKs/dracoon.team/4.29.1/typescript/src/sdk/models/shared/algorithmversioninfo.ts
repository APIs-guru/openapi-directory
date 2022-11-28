import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AlgorithmVersionInfoStatusEnum {
    Required = "REQUIRED",
    Discouraged = "DISCOURAGED"
}


// AlgorithmVersionInfo
/** 
 * Algorithm information
**/
export class AlgorithmVersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AlgorithmVersionInfoStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
