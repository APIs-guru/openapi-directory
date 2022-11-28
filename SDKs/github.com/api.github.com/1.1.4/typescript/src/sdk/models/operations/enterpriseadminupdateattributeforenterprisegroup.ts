import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterprise" })
  enterprise: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scim_group_id" })
  scimGroupId: string;
}

export enum EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum {
    AddLower = "add",
    AddMixed = "Add",
    RemoveLower = "remove",
    RemoveMixed = "Remove",
    ReplaceLower = "replace",
    ReplaceMixed = "Replace"
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Operations", elemType: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations })
  operations: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations[];

  @SpeakeasyMetadata({ data: "json, name=schemas" })
  schemas: string[];
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateAttributeForEnterpriseGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody;
}


export class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scimEnterpriseGroup?: shared.ScimEnterpriseGroup;
}
