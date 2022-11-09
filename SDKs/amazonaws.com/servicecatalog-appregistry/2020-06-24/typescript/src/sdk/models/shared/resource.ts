import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceIntegrations } from "./resourceintegrations";


// Resource
/** 
 *  The information about the resource.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=associationTime" })
  associationTime?: Date;

  @Metadata({ data: "json, name=integrations" })
  integrations?: ResourceIntegrations;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
