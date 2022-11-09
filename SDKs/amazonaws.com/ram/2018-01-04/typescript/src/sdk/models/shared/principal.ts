import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Principal
/** 
 * Describes a principal for use with Resource Access Manager.
**/
export class Principal extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=external" })
  external?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;
}
