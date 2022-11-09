import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceProperties } from "./namespaceproperties";
import { NamespaceTypeEnum } from "./namespacetypeenum";


// NamespaceSummary
/** 
 * A complex type that contains information about a namespace.
**/
export class NamespaceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: Date;

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
