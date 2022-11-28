import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReactionsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;
}


export class ReactionsDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class ReactionsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsDeletePathParams;

  @SpeakeasyMetadata()
  headers: ReactionsDeleteHeaders;
}


export class ReactionsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
