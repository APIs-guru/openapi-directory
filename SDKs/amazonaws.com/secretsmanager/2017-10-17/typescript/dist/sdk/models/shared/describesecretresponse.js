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
import { RotationRulesType } from "./rotationrulestype";
var DescribeSecretResponse = /** @class */ (function (_super) {
    __extends(DescribeSecretResponse, _super);
    function DescribeSecretResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ARN" }),
        __metadata("design:type", String)
    ], DescribeSecretResponse.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], DescribeSecretResponse.prototype, "createdDate", void 0);
    __decorate([
        Metadata({ data: "json, name=DeletedDate" }),
        __metadata("design:type", Date)
    ], DescribeSecretResponse.prototype, "deletedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DescribeSecretResponse.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=KmsKeyId" }),
        __metadata("design:type", String)
    ], DescribeSecretResponse.prototype, "kmsKeyId", void 0);
    __decorate([
        Metadata({ data: "json, name=LastAccessedDate" }),
        __metadata("design:type", Date)
    ], DescribeSecretResponse.prototype, "lastAccessedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=LastChangedDate" }),
        __metadata("design:type", Date)
    ], DescribeSecretResponse.prototype, "lastChangedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=LastRotatedDate" }),
        __metadata("design:type", Date)
    ], DescribeSecretResponse.prototype, "lastRotatedDate", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DescribeSecretResponse.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=OwningService" }),
        __metadata("design:type", String)
    ], DescribeSecretResponse.prototype, "owningService", void 0);
    __decorate([
        Metadata({ data: "json, name=PrimaryRegion" }),
        __metadata("design:type", String)
    ], DescribeSecretResponse.prototype, "primaryRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=ReplicationStatus", elemType: shared.ReplicationStatusType }),
        __metadata("design:type", Array)
    ], DescribeSecretResponse.prototype, "replicationStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=RotationEnabled" }),
        __metadata("design:type", Boolean)
    ], DescribeSecretResponse.prototype, "rotationEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=RotationLambdaARN" }),
        __metadata("design:type", String)
    ], DescribeSecretResponse.prototype, "rotationLambdaArn", void 0);
    __decorate([
        Metadata({ data: "json, name=RotationRules" }),
        __metadata("design:type", RotationRulesType)
    ], DescribeSecretResponse.prototype, "rotationRules", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], DescribeSecretResponse.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=VersionIdsToStages" }),
        __metadata("design:type", Map)
    ], DescribeSecretResponse.prototype, "versionIdsToStages", void 0);
    return DescribeSecretResponse;
}(SpeakeasyBase));
export { DescribeSecretResponse };
