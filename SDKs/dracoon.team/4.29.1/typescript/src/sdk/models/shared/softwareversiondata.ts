import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareVersionData
/** 
 * Software version information
**/
export class SoftwareVersionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildDate" })
  buildDate: Date;

  @Metadata({ data: "json, name=isDracoonCloud" })
  isDracoonCloud?: boolean;

  @Metadata({ data: "json, name=restApiVersion" })
  restApiVersion: string;

  @Metadata({ data: "json, name=scmRevisionNumber" })
  scmRevisionNumber: string;

  @Metadata({ data: "json, name=sdsServerVersion" })
  sdsServerVersion: string;
}
