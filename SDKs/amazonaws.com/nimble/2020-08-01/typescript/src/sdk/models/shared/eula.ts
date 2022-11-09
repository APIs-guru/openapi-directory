import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Eula
/** 
 * Represents a EULA resource.
**/
export class Eula extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=eulaId" })
  eulaId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
