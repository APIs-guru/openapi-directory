import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MetaGetOctocatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=s" })
  s?: string;
}


export class MetaGetOctocatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MetaGetOctocatQueryParams;
}


export class MetaGetOctocatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  metaGetOctocat200ApplicationOctocatStreamString?: string;
}
