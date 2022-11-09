import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDropletKernelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletKernelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListDropletKernelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDropletKernelsPathParams;

  @Metadata()
  queryParams: ListDropletKernelsQueryParams;
}


export class ListDropletKernels200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListDropletKernels200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDropletKernels200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDropletKernels200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDropletKernels200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListDropletKernels200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=kernels", elemType: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel })
  kernels?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesKernel[];

  @Metadata({ data: "json, name=links" })
  links?: ListDropletKernels200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListDropletKernels200ApplicationJsonMeta;
}


export class ListDropletKernels401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletKernelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDropletKernels200ApplicationJsonObject?: ListDropletKernels200ApplicationJson;

  @Metadata()
  listDropletKernels401ApplicationJsonObject?: ListDropletKernels401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
