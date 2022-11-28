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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2AmiResource } from "./ec2amiresource";
import { LambdaResource } from "./lambdaresource";
import { S3Resource } from "./s3resource";
// JobResource
/**
 * Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
**/
var JobResource = /** @class */ (function (_super) {
    __extends(JobResource, _super);
    function JobResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2AmiResources", elemType: Ec2AmiResource }),
        __metadata("design:type", Array)
    ], JobResource.prototype, "ec2AmiResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LambdaResources", elemType: LambdaResource }),
        __metadata("design:type", Array)
    ], JobResource.prototype, "lambdaResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Resources", elemType: S3Resource }),
        __metadata("design:type", Array)
    ], JobResource.prototype, "s3Resources", void 0);
    return JobResource;
}(SpeakeasyBase));
export { JobResource };
