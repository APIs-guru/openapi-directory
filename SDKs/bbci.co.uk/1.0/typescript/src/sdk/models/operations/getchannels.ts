import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChannelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: string;
}


export class GetChannelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChannelsQueryParams;
}


export class GetChannelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
