import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MetaGetOctocatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=s" })
  s?: string;
}


export class MetaGetOctocatRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MetaGetOctocatQueryParams;
}


export class MetaGetOctocatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  metaGetOctocat200ApplicationOctocatStreamString?: string;
}
