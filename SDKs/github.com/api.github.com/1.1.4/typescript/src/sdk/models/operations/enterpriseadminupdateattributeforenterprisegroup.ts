import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" })
  scimGroupId: string;
}

export enum EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum {
    AddLower = "add"
,    AddMixed = "Add"
,    RemoveLower = "remove"
,    RemoveMixed = "Remove"
,    ReplaceLower = "replace"
,    ReplaceMixed = "Replace"
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations extends SpeakeasyBase {
  @Metadata({ data: "json, name=op" })
  op: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=value" })
  value?: any;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Operations", elemType: operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations })
  operations: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations[];

  @Metadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
