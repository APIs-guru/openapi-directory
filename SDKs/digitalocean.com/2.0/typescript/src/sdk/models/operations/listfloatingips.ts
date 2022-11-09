import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFloatingIps200ApplicationJsonFloatingIpsRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: boolean;

  @Metadata({ data: "json, name=features" })
  features: any;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sizes" })
  sizes: any;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}


export class ListFloatingIps200ApplicationJsonFloatingIps extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet" })
  droplet?: any;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=region" })
  region?: ListFloatingIps200ApplicationJsonFloatingIpsRegion;
}


export class ListFloatingIps200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListFloatingIps200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListFloatingIps200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListFloatingIps200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListFloatingIps200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListFloatingIps200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=floating_ips", elemType: operations.ListFloatingIps200ApplicationJsonFloatingIps })
  floatingIps?: ListFloatingIps200ApplicationJsonFloatingIps[];

  @Metadata({ data: "json, name=links" })
  links?: ListFloatingIps200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListFloatingIps200ApplicationJsonMeta;
}


export class ListFloatingIps401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListFloatingIpsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listFloatingIps200ApplicationJsonObject?: ListFloatingIps200ApplicationJson;

  @Metadata()
  listFloatingIps401ApplicationJsonObject?: ListFloatingIps401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
