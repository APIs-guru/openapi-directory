import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareVersionData
/** 
 * Software version information
**/
export class SoftwareVersionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildDate" })
  buildDate: Date;

  @SpeakeasyMetadata({ data: "json, name=isDracoonCloud" })
  isDracoonCloud?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restApiVersion" })
  restApiVersion: string;

  @SpeakeasyMetadata({ data: "json, name=scmRevisionNumber" })
  scmRevisionNumber: string;

  @SpeakeasyMetadata({ data: "json, name=sdsServerVersion" })
  sdsServerVersion: string;
}
