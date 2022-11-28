import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceIntegrations } from "./resourceintegrations";



// Resource
/** 
 *  The information about the resource.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=associationTime" })
  associationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=integrations" })
  integrations?: ResourceIntegrations;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
