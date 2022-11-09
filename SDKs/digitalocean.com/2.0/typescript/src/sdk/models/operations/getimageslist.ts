import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetImagesListTypeEnum {
    Application = "application"
,    Distribution = "distribution"
}


export class GetImagesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=private" })
  private?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag_name" })
  tagName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetImagesListTypeEnum;
}


export class GetImagesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetImagesListQueryParams;
}


export class GetImagesList200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class GetImagesList200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class GetImagesList200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// GetImagesList200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class GetImagesList200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class GetImagesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=images", elemType: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage })
  images: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImage[];

  @Metadata({ data: "json, name=links" })
  links?: GetImagesList200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: GetImagesList200ApplicationJsonMeta;
}


export class GetImagesList401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetImagesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getImagesList200ApplicationJsonObject?: GetImagesList200ApplicationJson;

  @Metadata()
  getImagesList401ApplicationJsonObject?: GetImagesList401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
