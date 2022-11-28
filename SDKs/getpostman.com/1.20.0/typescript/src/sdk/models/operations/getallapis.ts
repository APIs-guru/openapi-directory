import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAllApIsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPublic" })
  isPublic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=until" })
  until?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedBy" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class GetAllApIsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllApIsQueryParams;
}


export class GetAllApIsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
