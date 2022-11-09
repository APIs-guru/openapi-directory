import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReactionsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;
}


export class ReactionsDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class ReactionsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsDeletePathParams;

  @Metadata()
  headers: ReactionsDeleteHeaders;
}


export class ReactionsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
