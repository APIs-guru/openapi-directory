import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDirectDebitsForMandateUuidQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mandateUuid" })
  mandateUuid: string;
}

export enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    A = "A",
    B = "B"
}

export enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum {
    Recieved = "RECIEVED",
    RejectRequested = "REJECT_REQUESTED",
    RejectReadyForProcessing = "REJECT_READY_FOR_PROCESSING",
    RejectRecordInProgress = "REJECT_RECORD_IN_PROGRESS",
    RejectRecorded = "REJECT_RECORDED",
    RejectFileCreated = "REJECT_FILE_CREATED",
    RejectFileSent = "REJECT_FILE_SENT",
    Collected = "COLLECTED",
    RefundRequested = "REFUND_REQUESTED",
    RefundRecordInProgress = "REFUND_RECORD_IN_PROGRESS",
    RefundRecorded = "REFUND_RECORDED",
    RefundFileCreated = "REFUND_FILE_CREATED",
    RefundFileSent = "REFUND_FILE_SENT"
}

export enum GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum {
    FirstCollection = "FIRST_COLLECTION",
    OngoingCollection = "ONGOING_COLLECTION",
    RepresentedCollection = "REPRESENTED_COLLECTION",
    FinalCollection = "FINAL_COLLECTION"
}


export class GetDirectDebitsForMandateUuidDirectDebitsDirectDebit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=directDebitReference" })
  directDebitReference?: string;

  @SpeakeasyMetadata({ data: "json, name=directDebitUuid" })
  directDebitUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=isDDIC" })
  isDdic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=mandateUUid" })
  mandateUUid?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorAlias" })
  originatorAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorName" })
  originatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=originatorReference" })
  originatorReference?: string;

  @SpeakeasyMetadata({ data: "json, name=schemeRejectReason" })
  schemeRejectReason?: string;

  @SpeakeasyMetadata({ data: "json, name=schemeRejectReasonCode" })
  schemeRejectReasonCode?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=targetIcan" })
  targetIcan?: number;

  @SpeakeasyMetadata({ data: "json, name=targetPayeeId" })
  targetPayeeId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum;
}


export class GetDirectDebitsForMandateUuidDirectDebits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directdebits", elemType: GetDirectDebitsForMandateUuidDirectDebitsDirectDebit })
  directdebits?: GetDirectDebitsForMandateUuidDirectDebitsDirectDebit[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetDirectDebitsForMandateUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDirectDebitsForMandateUuidQueryParams;
}


export class GetDirectDebitsForMandateUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directDebits?: GetDirectDebitsForMandateUuidDirectDebits;

  @SpeakeasyMetadata()
  statusCode: number;
}
