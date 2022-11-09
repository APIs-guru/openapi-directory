import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyDbSnapshotAttributeActionEnum {
    ModifyDbSnapshotAttribute = "ModifyDBSnapshotAttribute"
}

export enum GetModifyDbSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbSnapshotAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbSnapshotAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" })
  dbSnapshotIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ValuesToAdd" })
  valuesToAdd?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ValuesToRemove" })
  valuesToRemove?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbSnapshotAttributeVersionEnum;
}


export class GetModifyDbSnapshotAttributeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyDbSnapshotAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyDbSnapshotAttributeQueryParams;

  @Metadata()
  headers: GetModifyDbSnapshotAttributeHeaders;
}


export class GetModifyDbSnapshotAttributeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
