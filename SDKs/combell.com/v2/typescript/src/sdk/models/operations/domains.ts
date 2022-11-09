import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class DomainsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DomainsQueryParams;
}


export class DomainsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Domain })
  domains?: shared.Domain[];

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
