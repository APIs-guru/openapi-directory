import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespaceProperties } from "./namespaceproperties";
import { NamespaceTypeEnum } from "./namespacetypeenum";



// NamespaceSummary
/** 
 * A complex type that contains information about a namespace.
**/
export class NamespaceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: NamespaceProperties;

  @SpeakeasyMetadata({ data: "json, name=ServiceCount" })
  serviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: NamespaceTypeEnum;
}
