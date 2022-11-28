import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}


export class DeleteTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTagPathParams;
}


export class DeleteTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
