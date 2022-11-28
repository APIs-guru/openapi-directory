import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Compliance } from "./compliance";
import { FindingProviderFields } from "./findingproviderfields";
import { Malware } from "./malware";
import { Network } from "./network";
import { NetworkPathComponent } from "./networkpathcomponent";
import { Note } from "./note";
import { PatchSummary } from "./patchsummary";
import { ProcessDetails } from "./processdetails";
import { RecordStateEnum } from "./recordstateenum";
import { RelatedFinding } from "./relatedfinding";
import { Remediation } from "./remediation";
import { Resource } from "./resource";
import { Severity } from "./severity";
import { ThreatIntelIndicator } from "./threatintelindicator";
import { VerificationStateEnum } from "./verificationstateenum";
import { Vulnerability } from "./vulnerability";
import { Workflow } from "./workflow";
import { WorkflowStateEnum } from "./workflowstateenum";



// AwsSecurityFinding
/** 
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note>
**/
export class AwsSecurityFinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: Action;

  @SpeakeasyMetadata({ data: "json, name=AwsAccountId" })
  awsAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=CompanyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Compliance" })
  compliance?: Compliance;

  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt: string;

  @SpeakeasyMetadata({ data: "json, name=Criticality" })
  criticality?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFields" })
  findingProviderFields?: FindingProviderFields;

  @SpeakeasyMetadata({ data: "json, name=FirstObservedAt" })
  firstObservedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=GeneratorId" })
  generatorId: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=LastObservedAt" })
  lastObservedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=Malware", elemType: Malware })
  malware?: Malware[];

  @SpeakeasyMetadata({ data: "json, name=Network" })
  network?: Network;

  @SpeakeasyMetadata({ data: "json, name=NetworkPath", elemType: NetworkPathComponent })
  networkPath?: NetworkPathComponent[];

  @SpeakeasyMetadata({ data: "json, name=Note" })
  note?: Note;

  @SpeakeasyMetadata({ data: "json, name=PatchSummary" })
  patchSummary?: PatchSummary;

  @SpeakeasyMetadata({ data: "json, name=Process" })
  process?: ProcessDetails;

  @SpeakeasyMetadata({ data: "json, name=ProductArn" })
  productArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProductFields" })
  productFields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=RecordState" })
  recordState?: RecordStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=RelatedFindings", elemType: RelatedFinding })
  relatedFindings?: RelatedFinding[];

  @SpeakeasyMetadata({ data: "json, name=Remediation" })
  remediation?: Remediation;

  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: Resource })
  resources: Resource[];

  @SpeakeasyMetadata({ data: "json, name=SchemaVersion" })
  schemaVersion: string;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: Severity;

  @SpeakeasyMetadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicators", elemType: ThreatIntelIndicator })
  threatIntelIndicators?: ThreatIntelIndicator[];

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=Types" })
  types?: string[];

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt: string;

  @SpeakeasyMetadata({ data: "json, name=UserDefinedFields" })
  userDefinedFields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=VerificationState" })
  verificationState?: VerificationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Vulnerabilities", elemType: Vulnerability })
  vulnerabilities?: Vulnerability[];

  @SpeakeasyMetadata({ data: "json, name=Workflow" })
  workflow?: Workflow;

  @SpeakeasyMetadata({ data: "json, name=WorkflowState" })
  workflowState?: WorkflowStateEnum;
}
