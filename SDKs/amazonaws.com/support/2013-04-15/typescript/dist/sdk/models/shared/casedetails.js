var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecentCaseCommunications } from "./recentcasecommunications";
// CaseDetails
/**
 * <p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId</b> - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode</b> - The category of problem for the support case. Corresponds to the <code>CategoryCode</code> values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId</b> - The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language</b> - The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>nextToken</b> - A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode</b> - The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode</b> - The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status</b> - The status of the case in the AWS Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject</b> - The subject line of the case.</p> </li> <li> <p> <b>submittedBy</b> - The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated</b> - The time the case was created, in ISO-8601 format.</p> </li> </ul>
**/
var CaseDetails = /** @class */ (function (_super) {
    __extends(CaseDetails, _super);
    function CaseDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=caseId" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "caseId", void 0);
    __decorate([
        Metadata({ data: "json, name=categoryCode" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "categoryCode", void 0);
    __decorate([
        Metadata({ data: "json, name=ccEmailAddresses" }),
        __metadata("design:type", Array)
    ], CaseDetails.prototype, "ccEmailAddresses", void 0);
    __decorate([
        Metadata({ data: "json, name=displayId" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "displayId", void 0);
    __decorate([
        Metadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "json, name=recentCommunications" }),
        __metadata("design:type", RecentCaseCommunications)
    ], CaseDetails.prototype, "recentCommunications", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceCode" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "serviceCode", void 0);
    __decorate([
        Metadata({ data: "json, name=severityCode" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "severityCode", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "subject", void 0);
    __decorate([
        Metadata({ data: "json, name=submittedBy" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "submittedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=timeCreated" }),
        __metadata("design:type", String)
    ], CaseDetails.prototype, "timeCreated", void 0);
    return CaseDetails;
}(SpeakeasyBase));
export { CaseDetails };
