import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrganizationMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteOrganizationMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOrganizationMemberPathParams;
}


export class DeleteOrganizationMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
