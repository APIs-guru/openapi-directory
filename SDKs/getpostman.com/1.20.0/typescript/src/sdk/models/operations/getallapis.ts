import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAllApIsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBy" })
  createdBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isPublic" })
  isPublic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=summary" })
  summary?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=until" })
  until?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedBy" })
  updatedBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class GetAllApIsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAllApIsQueryParams;
}


export class GetAllApIsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
