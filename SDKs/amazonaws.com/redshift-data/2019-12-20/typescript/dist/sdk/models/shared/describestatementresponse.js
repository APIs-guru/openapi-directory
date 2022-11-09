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
import * as shared from "../shared";
import { StatusStringEnum } from "./statusstringenum";
var DescribeStatementResponse = /** @class */ (function (_super) {
    __extends(DescribeStatementResponse, _super);
    function DescribeStatementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", Date)
    ], DescribeStatementResponse.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=Database" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "database", void 0);
    __decorate([
        Metadata({ data: "json, name=DbUser" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "dbUser", void 0);
    __decorate([
        Metadata({ data: "json, name=Duration" }),
        __metadata("design:type", Number)
    ], DescribeStatementResponse.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=Error" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=HasResultSet" }),
        __metadata("design:type", Boolean)
    ], DescribeStatementResponse.prototype, "hasResultSet", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=QueryParameters", elemType: shared.SqlParameter }),
        __metadata("design:type", Array)
    ], DescribeStatementResponse.prototype, "queryParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=QueryString" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "queryString", void 0);
    __decorate([
        Metadata({ data: "json, name=RedshiftPid" }),
        __metadata("design:type", Number)
    ], DescribeStatementResponse.prototype, "redshiftPid", void 0);
    __decorate([
        Metadata({ data: "json, name=RedshiftQueryId" }),
        __metadata("design:type", Number)
    ], DescribeStatementResponse.prototype, "redshiftQueryId", void 0);
    __decorate([
        Metadata({ data: "json, name=ResultRows" }),
        __metadata("design:type", Number)
    ], DescribeStatementResponse.prototype, "resultRows", void 0);
    __decorate([
        Metadata({ data: "json, name=ResultSize" }),
        __metadata("design:type", Number)
    ], DescribeStatementResponse.prototype, "resultSize", void 0);
    __decorate([
        Metadata({ data: "json, name=SecretArn" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "secretArn", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribeStatementResponse.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=SubStatements", elemType: shared.SubStatementData }),
        __metadata("design:type", Array)
    ], DescribeStatementResponse.prototype, "subStatements", void 0);
    __decorate([
        Metadata({ data: "json, name=UpdatedAt" }),
        __metadata("design:type", Date)
    ], DescribeStatementResponse.prototype, "updatedAt", void 0);
    return DescribeStatementResponse;
}(SpeakeasyBase));
export { DescribeStatementResponse };
