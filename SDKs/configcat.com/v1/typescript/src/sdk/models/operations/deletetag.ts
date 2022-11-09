import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class DeleteTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTagPathParams;
}


export class DeleteTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
