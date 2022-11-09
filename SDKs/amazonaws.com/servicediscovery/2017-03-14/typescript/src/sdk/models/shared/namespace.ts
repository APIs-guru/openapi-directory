import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceProperties } from "./namespaceproperties";
import { NamespaceTypeEnum } from "./namespacetypeenum";


// Namespace
/** 
 * A complex type that contains information about a specified namespace.
**/
export class Namespace extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: NamespaceProperties;

  @Metadata({ data: "json, name=ServiceCount" })
  serviceCount?: number;

  @Metadata({ data: "json, name=Type" })
  type?: NamespaceTypeEnum;
}
