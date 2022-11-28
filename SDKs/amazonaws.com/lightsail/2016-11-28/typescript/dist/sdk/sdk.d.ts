import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://lightsail.{region}.amazonaws.com", "https://lightsail.{region}.amazonaws.com", "http://lightsail.{region}.amazonaws.com.cn", "https://lightsail.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * allocateStaticIp - Allocates a static IP address.
    **/
    allocateStaticIp(req: operations.AllocateStaticIpRequest, config?: AxiosRequestConfig): Promise<operations.AllocateStaticIpResponse>;
    /**
     * attachCertificateToDistribution - <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the domains that are associated with the certificate.</p> <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach to your distribution.</p> <important> <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any AWS Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
    **/
    attachCertificateToDistribution(req: operations.AttachCertificateToDistributionRequest, config?: AxiosRequestConfig): Promise<operations.AttachCertificateToDistributionResponse>;
    /**
     * attachDisk - <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    attachDisk(req: operations.AttachDiskRequest, config?: AxiosRequestConfig): Promise<operations.AttachDiskResponse>;
    /**
     * attachInstancesToLoadBalancer - <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
    **/
    attachInstancesToLoadBalancer(req: operations.AttachInstancesToLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.AttachInstancesToLoadBalancerResponse>;
    /**
     * attachLoadBalancerTlsCertificate - <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    attachLoadBalancerTlsCertificate(req: operations.AttachLoadBalancerTlsCertificateRequest, config?: AxiosRequestConfig): Promise<operations.AttachLoadBalancerTlsCertificateResponse>;
    /**
     * attachStaticIp - Attaches a static IP address to a specific Amazon Lightsail instance.
    **/
    attachStaticIp(req: operations.AttachStaticIpRequest, config?: AxiosRequestConfig): Promise<operations.AttachStaticIpResponse>;
    /**
     * closeInstancePublicPorts - <p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    closeInstancePublicPorts(req: operations.CloseInstancePublicPortsRequest, config?: AxiosRequestConfig): Promise<operations.CloseInstancePublicPortsResponse>;
    /**
     * copySnapshot - <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>
    **/
    copySnapshot(req: operations.CopySnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CopySnapshotResponse>;
    /**
     * createBucket - <p>Creates an Amazon Lightsail bucket.</p> <p>A bucket is a cloud storage resource available in the Lightsail object storage service. Use buckets to store objects such as data and its descriptive metadata. For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
    **/
    createBucket(req: operations.CreateBucketRequest, config?: AxiosRequestConfig): Promise<operations.CreateBucketResponse>;
    /**
     * createBucketAccessKey - <p>Creates a new access key for the specified Amazon Lightsail bucket. Access keys consist of an access key ID and corresponding secret access key.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a>GetBucketAccessKeys</a> action to get a list of current access keys for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>
    **/
    createBucketAccessKey(req: operations.CreateBucketAccessKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateBucketAccessKeyResponse>;
    /**
     * createCertificate - <p>Creates an SSL/TLS certificate for an Amazon Lightsail content delivery network (CDN) distribution and a container service.</p> <p>After the certificate is valid, use the <code>AttachCertificateToDistribution</code> action to use the certificate and its domains with your distribution. Or use the <code>UpdateContainerService</code> action to use the certificate and its domains with your container service.</p> <important> <p>Only certificates created in the <code>us-east-1</code> AWS Region can be attached to Lightsail distributions. Lightsail distributions are global resources that can reference an origin in any AWS Region, and distribute its content globally. However, all distributions are located in the <code>us-east-1</code> Region.</p> </important>
    **/
    createCertificate(req: operations.CreateCertificateRequest, config?: AxiosRequestConfig): Promise<operations.CreateCertificateResponse>;
    /**
     * createCloudFormationStack - <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>
    **/
    createCloudFormationStack(req: operations.CreateCloudFormationStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateCloudFormationStackResponse>;
    /**
     * createContactMethod - <p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
    **/
    createContactMethod(req: operations.CreateContactMethodRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactMethodResponse>;
    /**
     * createContainerService - <p>Creates an Amazon Lightsail container service.</p> <p>A Lightsail container service is a compute resource to which you can deploy containers. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev Guide</i>.</p>
    **/
    createContainerService(req: operations.CreateContainerServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateContainerServiceResponse>;
    /**
     * createContainerServiceDeployment - <p>Creates a deployment for your Amazon Lightsail container service.</p> <p>A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.</p> <p>You can deploy containers to your container service using container images from a public registry like Docker Hub, or from your local machine. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
    **/
    createContainerServiceDeployment(req: operations.CreateContainerServiceDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateContainerServiceDeploymentResponse>;
    /**
     * createContainerServiceRegistryLogin - <p>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials.</p> <note> <p>You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry.</p> </note> <p>After you push your container images to the container image registry of your Lightsail account, use the <code>RegisterContainerImage</code> action to register the pushed images to a specific Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
    **/
    createContainerServiceRegistryLogin(req: operations.CreateContainerServiceRegistryLoginRequest, config?: AxiosRequestConfig): Promise<operations.CreateContainerServiceRegistryLoginResponse>;
    /**
     * createDisk - <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createDisk(req: operations.CreateDiskRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiskResponse>;
    /**
     * createDiskFromSnapshot - <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createDiskFromSnapshot(req: operations.CreateDiskFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiskFromSnapshotResponse>;
    /**
     * createDiskSnapshot - <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createDiskSnapshot(req: operations.CreateDiskSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiskSnapshotResponse>;
    /**
     * createDistribution - <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution is a globally distributed network of caching servers that improve the performance of your website or web application hosted on a Lightsail instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
    **/
    createDistribution(req: operations.CreateDistributionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDistributionResponse>;
    /**
     * createDomain - <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     * createDomainEntry - <p>Creates one of the following domain name system (DNS) records in a domain DNS zone: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createDomainEntry(req: operations.CreateDomainEntryRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainEntryResponse>;
    /**
     * createInstanceSnapshot - <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createInstanceSnapshot(req: operations.CreateInstanceSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateInstanceSnapshotResponse>;
    /**
     * createInstances - <p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Developer Guide</a>.</p>
    **/
    createInstances(req: operations.CreateInstancesRequest, config?: AxiosRequestConfig): Promise<operations.CreateInstancesResponse>;
    /**
     * createInstancesFromSnapshot - <p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createInstancesFromSnapshot(req: operations.CreateInstancesFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateInstancesFromSnapshotResponse>;
    /**
     * createKeyPair - <p>Creates an SSH key pair.</p> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createKeyPair(req: operations.CreateKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.CreateKeyPairResponse>;
    /**
     * createLoadBalancer - <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createLoadBalancer(req: operations.CreateLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.CreateLoadBalancerResponse>;
    /**
     * createLoadBalancerTlsCertificate - <p>Creates an SSL/TLS certificate for an Amazon Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createLoadBalancerTlsCertificate(req: operations.CreateLoadBalancerTlsCertificateRequest, config?: AxiosRequestConfig): Promise<operations.CreateLoadBalancerTlsCertificateResponse>;
    /**
     * createRelationalDatabase - <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createRelationalDatabase(req: operations.CreateRelationalDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.CreateRelationalDatabaseResponse>;
    /**
     * createRelationalDatabaseFromSnapshot - <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createRelationalDatabaseFromSnapshot(req: operations.CreateRelationalDatabaseFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateRelationalDatabaseFromSnapshotResponse>;
    /**
     * createRelationalDatabaseSnapshot - <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    createRelationalDatabaseSnapshot(req: operations.CreateRelationalDatabaseSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateRelationalDatabaseSnapshotResponse>;
    /**
     * deleteAlarm - <p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
    **/
    deleteAlarm(req: operations.DeleteAlarmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlarmResponse>;
    /**
     * deleteAutoSnapshot - Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
    **/
    deleteAutoSnapshot(req: operations.DeleteAutoSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutoSnapshotResponse>;
    /**
     * deleteBucket - <p>Deletes a Amazon Lightsail bucket.</p> <note> <p>When you delete your bucket, the bucket name is released and can be reused for a new bucket in your account or another AWS account.</p> </note>
    **/
    deleteBucket(req: operations.DeleteBucketRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBucketResponse>;
    /**
     * deleteBucketAccessKey - <p>Deletes an access key for the specified Amazon Lightsail bucket.</p> <p>We recommend that you delete an access key if the secret access key is compromised.</p> <p>For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
    **/
    deleteBucketAccessKey(req: operations.DeleteBucketAccessKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBucketAccessKeyResponse>;
    /**
     * deleteCertificate - <p>Deletes an SSL/TLS certificate for your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Certificates that are currently attached to a distribution cannot be deleted. Use the <code>DetachCertificateFromDistribution</code> action to detach a certificate from a distribution.</p>
    **/
    deleteCertificate(req: operations.DeleteCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCertificateResponse>;
    /**
     * deleteContactMethod - <p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
    **/
    deleteContactMethod(req: operations.DeleteContactMethodRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContactMethodResponse>;
    /**
     * deleteContainerImage - Deletes a container image that is registered to your Amazon Lightsail container service.
    **/
    deleteContainerImage(req: operations.DeleteContainerImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainerImageResponse>;
    /**
     * deleteContainerService - Deletes your Amazon Lightsail container service.
    **/
    deleteContainerService(req: operations.DeleteContainerServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainerServiceResponse>;
    /**
     * deleteDisk - <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteDisk(req: operations.DeleteDiskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDiskResponse>;
    /**
     * deleteDiskSnapshot - <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteDiskSnapshot(req: operations.DeleteDiskSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDiskSnapshotResponse>;
    /**
     * deleteDistribution - Deletes your Amazon Lightsail content delivery network (CDN) distribution.
    **/
    deleteDistribution(req: operations.DeleteDistributionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDistributionResponse>;
    /**
     * deleteDomain - <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * deleteDomainEntry - <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteDomainEntry(req: operations.DeleteDomainEntryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainEntryResponse>;
    /**
     * deleteInstance - <p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteInstance(req: operations.DeleteInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstanceResponse>;
    /**
     * deleteInstanceSnapshot - <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteInstanceSnapshot(req: operations.DeleteInstanceSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstanceSnapshotResponse>;
    /**
     * deleteKeyPair - <p>Deletes a specific SSH key pair.</p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteKeyPair(req: operations.DeleteKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeyPairResponse>;
    /**
     * deleteKnownHostKeys - <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
    **/
    deleteKnownHostKeys(req: operations.DeleteKnownHostKeysRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKnownHostKeysResponse>;
    /**
     * deleteLoadBalancer - <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteLoadBalancer(req: operations.DeleteLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLoadBalancerResponse>;
    /**
     * deleteLoadBalancerTlsCertificate - <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteLoadBalancerTlsCertificate(req: operations.DeleteLoadBalancerTlsCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLoadBalancerTlsCertificateResponse>;
    /**
     * deleteRelationalDatabase - <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteRelationalDatabase(req: operations.DeleteRelationalDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRelationalDatabaseResponse>;
    /**
     * deleteRelationalDatabaseSnapshot - <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    deleteRelationalDatabaseSnapshot(req: operations.DeleteRelationalDatabaseSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRelationalDatabaseSnapshotResponse>;
    /**
     * detachCertificateFromDistribution - <p>Detaches an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After the certificate is detached, your distribution stops accepting traffic for all of the domains that are associated with the certificate.</p>
    **/
    detachCertificateFromDistribution(req: operations.DetachCertificateFromDistributionRequest, config?: AxiosRequestConfig): Promise<operations.DetachCertificateFromDistributionResponse>;
    /**
     * detachDisk - <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    detachDisk(req: operations.DetachDiskRequest, config?: AxiosRequestConfig): Promise<operations.DetachDiskResponse>;
    /**
     * detachInstancesFromLoadBalancer - <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    detachInstancesFromLoadBalancer(req: operations.DetachInstancesFromLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.DetachInstancesFromLoadBalancerResponse>;
    /**
     * detachStaticIp - Detaches a static IP from the Amazon Lightsail instance to which it is attached.
    **/
    detachStaticIp(req: operations.DetachStaticIpRequest, config?: AxiosRequestConfig): Promise<operations.DetachStaticIpResponse>;
    /**
     * disableAddOn - Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
    **/
    disableAddOn(req: operations.DisableAddOnRequest, config?: AxiosRequestConfig): Promise<operations.DisableAddOnResponse>;
    /**
     * downloadDefaultKeyPair - Downloads the default SSH key pair from the user's account.
    **/
    downloadDefaultKeyPair(req: operations.DownloadDefaultKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.DownloadDefaultKeyPairResponse>;
    /**
     * enableAddOn - Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
    **/
    enableAddOn(req: operations.EnableAddOnRequest, config?: AxiosRequestConfig): Promise<operations.EnableAddOnResponse>;
    /**
     * exportSnapshot - <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
    **/
    exportSnapshot(req: operations.ExportSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.ExportSnapshotResponse>;
    /**
     * getActiveNames - Returns the names of all active (not deleted) resources.
    **/
    getActiveNames(req: operations.GetActiveNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveNamesResponse>;
    /**
     * getAlarms - <p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
    **/
    getAlarms(req: operations.GetAlarmsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlarmsResponse>;
    /**
     * getAutoSnapshots - Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Amazon Lightsail Developer Guide</a>.
    **/
    getAutoSnapshots(req: operations.GetAutoSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutoSnapshotsResponse>;
    /**
     * getBlueprints - <p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>
    **/
    getBlueprints(req: operations.GetBlueprintsRequest, config?: AxiosRequestConfig): Promise<operations.GetBlueprintsResponse>;
    /**
     * getBucketAccessKeys - <p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p> <important> <p>This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the <a>CreateBucketAccessKey</a> action. If you lose the secret access key, you must create a new access key.</p> </important>
    **/
    getBucketAccessKeys(req: operations.GetBucketAccessKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketAccessKeysResponse>;
    /**
     * getBucketBundles - <p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p> <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a bucket.</p> <p>Use the <a>UpdateBucketBundle</a> action to update the bundle for a bucket.</p>
    **/
    getBucketBundles(req: operations.GetBucketBundlesRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketBundlesResponse>;
    /**
     * getBucketMetricData - <p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p> <p>Metrics report the utilization of a bucket. View and collect metric data regularly to monitor the number of objects stored in a bucket (including object versions) and the storage space used by those objects.</p>
    **/
    getBucketMetricData(req: operations.GetBucketMetricDataRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketMetricDataResponse>;
    /**
     * getBuckets - <p>Returns information about one or more Amazon Lightsail buckets.</p> <p>For more information about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>..</p>
    **/
    getBuckets(req: operations.GetBucketsRequest, config?: AxiosRequestConfig): Promise<operations.GetBucketsResponse>;
    /**
     * getBundles - Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or <i>instance</i>).
    **/
    getBundles(req: operations.GetBundlesRequest, config?: AxiosRequestConfig): Promise<operations.GetBundlesResponse>;
    /**
     * getCertificates - <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p> <note> <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
    **/
    getCertificates(req: operations.GetCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificatesResponse>;
    /**
     * getCloudFormationStackRecords - <p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>
    **/
    getCloudFormationStackRecords(req: operations.GetCloudFormationStackRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetCloudFormationStackRecordsResponse>;
    /**
     * getContactMethods - <p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
    **/
    getContactMethods(req: operations.GetContactMethodsRequest, config?: AxiosRequestConfig): Promise<operations.GetContactMethodsResponse>;
    /**
     * getContainerApiMetadata - Returns information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin.
    **/
    getContainerApiMetadata(req: operations.GetContainerApiMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerApiMetadataResponse>;
    /**
     * getContainerImages - <p>Returns the container images that are registered to your Amazon Lightsail container service.</p> <note> <p>If you created a deployment on your Lightsail container service that uses container images from a public registry like Docker Hub, those images are not returned as part of this action. Those images are not registered to your Lightsail container service.</p> </note>
    **/
    getContainerImages(req: operations.GetContainerImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerImagesResponse>;
    /**
     * getContainerLog - <p>Returns the log events of a container of your Amazon Lightsail container service.</p> <p>If your container service has more than one node (i.e., a scale greater than 1), then the log events that are returned for the specified container are merged from all nodes on your container service.</p> <note> <p>Container logs are retained for a certain amount of time. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>AWS General Reference</i>.</p> </note>
    **/
    getContainerLog(req: operations.GetContainerLogRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerLogResponse>;
    /**
     * getContainerServiceDeployments - <p>Returns the deployments for your Amazon Lightsail container service</p> <p>A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service.</p> <p>The deployments are ordered by version in ascending order. The newest version is listed at the top of the response.</p> <note> <p>A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/lightsail.html">Amazon Lightsail endpoints and quotas</a> in the <i>AWS General Reference</i>.</p> </note>
    **/
    getContainerServiceDeployments(req: operations.GetContainerServiceDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerServiceDeploymentsResponse>;
    /**
     * getContainerServiceMetricData - <p>Returns the data points of a specific metric of your Amazon Lightsail container service.</p> <p>Metrics report the utilization of your resources. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
    **/
    getContainerServiceMetricData(req: operations.GetContainerServiceMetricDataRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerServiceMetricDataResponse>;
    /**
     * getContainerServicePowers - <p>Returns the list of powers that can be specified for your Amazon Lightsail container services.</p> <p>The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</p>
    **/
    getContainerServicePowers(req: operations.GetContainerServicePowersRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerServicePowersResponse>;
    /**
     * getContainerServices - Returns information about one or more of your Amazon Lightsail container services.
    **/
    getContainerServices(req: operations.GetContainerServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerServicesResponse>;
    /**
     * getDisk - Returns information about a specific block storage disk.
    **/
    getDisk(req: operations.GetDiskRequest, config?: AxiosRequestConfig): Promise<operations.GetDiskResponse>;
    /**
     * getDiskSnapshot - Returns information about a specific block storage disk snapshot.
    **/
    getDiskSnapshot(req: operations.GetDiskSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetDiskSnapshotResponse>;
    /**
     * getDiskSnapshots - Returns information about all block storage disk snapshots in your AWS account and region.
    **/
    getDiskSnapshots(req: operations.GetDiskSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetDiskSnapshotsResponse>;
    /**
     * getDisks - Returns information about all block storage disks in your AWS account and region.
    **/
    getDisks(req: operations.GetDisksRequest, config?: AxiosRequestConfig): Promise<operations.GetDisksResponse>;
    /**
     * getDistributionBundles - <p>Returns the bundles that can be applied to your Amazon Lightsail content delivery network (CDN) distributions.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your dsitribution.</p>
    **/
    getDistributionBundles(req: operations.GetDistributionBundlesRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionBundlesResponse>;
    /**
     * getDistributionLatestCacheReset - Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.
    **/
    getDistributionLatestCacheReset(req: operations.GetDistributionLatestCacheResetRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionLatestCacheResetResponse>;
    /**
     * getDistributionMetricData - <p>Returns the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
    **/
    getDistributionMetricData(req: operations.GetDistributionMetricDataRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionMetricDataResponse>;
    /**
     * getDistributions - Returns information about one or more of your Amazon Lightsail content delivery network (CDN) distributions.
    **/
    getDistributions(req: operations.GetDistributionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsResponse>;
    /**
     * getDomain - Returns information about a specific domain recordset.
    **/
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * getDomains - Returns a list of all domains in the user's account.
    **/
    getDomains(req: operations.GetDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsResponse>;
    /**
     * getExportSnapshotRecords - <p>Returns all export snapshot records created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <a>CreateCloudFormationStack</a> action.</p>
    **/
    getExportSnapshotRecords(req: operations.GetExportSnapshotRecordsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportSnapshotRecordsResponse>;
    /**
     * getInstance - Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
    **/
    getInstance(req: operations.GetInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceResponse>;
    /**
     * getInstanceAccessDetails - <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    getInstanceAccessDetails(req: operations.GetInstanceAccessDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceAccessDetailsResponse>;
    /**
     * getInstanceMetricData - <p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
    **/
    getInstanceMetricData(req: operations.GetInstanceMetricDataRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceMetricDataResponse>;
    /**
     * getInstancePortStates - Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
    **/
    getInstancePortStates(req: operations.GetInstancePortStatesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancePortStatesResponse>;
    /**
     * getInstanceSnapshot - Returns information about a specific instance snapshot.
    **/
    getInstanceSnapshot(req: operations.GetInstanceSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceSnapshotResponse>;
    /**
     * getInstanceSnapshots - Returns all instance snapshots for the user's account.
    **/
    getInstanceSnapshots(req: operations.GetInstanceSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceSnapshotsResponse>;
    /**
     * getInstanceState - Returns the state of a specific instance. Works on one instance at a time.
    **/
    getInstanceState(req: operations.GetInstanceStateRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceStateResponse>;
    /**
     * getInstances - Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.
    **/
    getInstances(req: operations.GetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GetInstancesResponse>;
    /**
     * getKeyPair - Returns information about a specific key pair.
    **/
    getKeyPair(req: operations.GetKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.GetKeyPairResponse>;
    /**
     * getKeyPairs - Returns information about all key pairs in the user's account.
    **/
    getKeyPairs(req: operations.GetKeyPairsRequest, config?: AxiosRequestConfig): Promise<operations.GetKeyPairsResponse>;
    /**
     * getLoadBalancer - Returns information about the specified Lightsail load balancer.
    **/
    getLoadBalancer(req: operations.GetLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerResponse>;
    /**
     * getLoadBalancerMetricData - <p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
    **/
    getLoadBalancerMetricData(req: operations.GetLoadBalancerMetricDataRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerMetricDataResponse>;
    /**
     * getLoadBalancerTlsCertificates - <p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>
    **/
    getLoadBalancerTlsCertificates(req: operations.GetLoadBalancerTlsCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerTlsCertificatesResponse>;
    /**
     * getLoadBalancers - Returns information about all load balancers in an account.
    **/
    getLoadBalancers(req: operations.GetLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancersResponse>;
    /**
     * getOperation - Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
    **/
    getOperation(req: operations.GetOperationRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationResponse>;
    /**
     * getOperations - <p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>
    **/
    getOperations(req: operations.GetOperationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationsResponse>;
    /**
     * getOperationsForResource - Gets operations for a specific resource (e.g., an instance or a static IP).
    **/
    getOperationsForResource(req: operations.GetOperationsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationsForResourceResponse>;
    /**
     * getRegions - Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.
    **/
    getRegions(req: operations.GetRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * getRelationalDatabase - Returns information about a specific database in Amazon Lightsail.
    **/
    getRelationalDatabase(req: operations.GetRelationalDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseResponse>;
    /**
     * getRelationalDatabaseBlueprints - <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>
    **/
    getRelationalDatabaseBlueprints(req: operations.GetRelationalDatabaseBlueprintsRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseBlueprintsResponse>;
    /**
     * getRelationalDatabaseBundles - <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>
    **/
    getRelationalDatabaseBundles(req: operations.GetRelationalDatabaseBundlesRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseBundlesResponse>;
    /**
     * getRelationalDatabaseEvents - Returns a list of events for a specific database in Amazon Lightsail.
    **/
    getRelationalDatabaseEvents(req: operations.GetRelationalDatabaseEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseEventsResponse>;
    /**
     * getRelationalDatabaseLogEvents - Returns a list of log events for a database in Amazon Lightsail.
    **/
    getRelationalDatabaseLogEvents(req: operations.GetRelationalDatabaseLogEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseLogEventsResponse>;
    /**
     * getRelationalDatabaseLogStreams - Returns a list of available log streams for a specific database in Amazon Lightsail.
    **/
    getRelationalDatabaseLogStreams(req: operations.GetRelationalDatabaseLogStreamsRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseLogStreamsResponse>;
    /**
     * getRelationalDatabaseMasterUserPassword - <p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>
    **/
    getRelationalDatabaseMasterUserPassword(req: operations.GetRelationalDatabaseMasterUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseMasterUserPasswordResponse>;
    /**
     * getRelationalDatabaseMetricData - <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
    **/
    getRelationalDatabaseMetricData(req: operations.GetRelationalDatabaseMetricDataRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseMetricDataResponse>;
    /**
     * getRelationalDatabaseParameters - <p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>
    **/
    getRelationalDatabaseParameters(req: operations.GetRelationalDatabaseParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseParametersResponse>;
    /**
     * getRelationalDatabaseSnapshot - Returns information about a specific database snapshot in Amazon Lightsail.
    **/
    getRelationalDatabaseSnapshot(req: operations.GetRelationalDatabaseSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseSnapshotResponse>;
    /**
     * getRelationalDatabaseSnapshots - Returns information about all of your database snapshots in Amazon Lightsail.
    **/
    getRelationalDatabaseSnapshots(req: operations.GetRelationalDatabaseSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabaseSnapshotsResponse>;
    /**
     * getRelationalDatabases - Returns information about all of your databases in Amazon Lightsail.
    **/
    getRelationalDatabases(req: operations.GetRelationalDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationalDatabasesResponse>;
    /**
     * getStaticIp - Returns information about an Amazon Lightsail static IP.
    **/
    getStaticIp(req: operations.GetStaticIpRequest, config?: AxiosRequestConfig): Promise<operations.GetStaticIpResponse>;
    /**
     * getStaticIps - Returns information about all static IPs in the user's account.
    **/
    getStaticIps(req: operations.GetStaticIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetStaticIpsResponse>;
    /**
     * importKeyPair - Imports a public SSH key from a specific key pair.
    **/
    importKeyPair(req: operations.ImportKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.ImportKeyPairResponse>;
    /**
     * isVpcPeered - Returns a Boolean value indicating whether your Lightsail VPC is peered.
    **/
    isVpcPeered(req: operations.IsVpcPeeredRequest, config?: AxiosRequestConfig): Promise<operations.IsVpcPeeredResponse>;
    /**
     * openInstancePublicPorts - <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    openInstancePublicPorts(req: operations.OpenInstancePublicPortsRequest, config?: AxiosRequestConfig): Promise<operations.OpenInstancePublicPortsResponse>;
    /**
     * peerVpc - Peers the Lightsail VPC with the user's default VPC.
    **/
    peerVpc(req: operations.PeerVpcRequest, config?: AxiosRequestConfig): Promise<operations.PeerVpcResponse>;
    /**
     * putAlarm - <p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>
    **/
    putAlarm(req: operations.PutAlarmRequest, config?: AxiosRequestConfig): Promise<operations.PutAlarmResponse>;
    /**
     * putInstancePublicPorts - <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    putInstancePublicPorts(req: operations.PutInstancePublicPortsRequest, config?: AxiosRequestConfig): Promise<operations.PutInstancePublicPortsResponse>;
    /**
     * rebootInstance - <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    rebootInstance(req: operations.RebootInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RebootInstanceResponse>;
    /**
     * rebootRelationalDatabase - <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    rebootRelationalDatabase(req: operations.RebootRelationalDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.RebootRelationalDatabaseResponse>;
    /**
     * registerContainerImage - <p>Registers a container image to your Amazon Lightsail container service.</p> <note> <p>This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-pushing-container-images">Pushing and managing container images on your Amazon Lightsail container services</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> </note>
    **/
    registerContainerImage(req: operations.RegisterContainerImageRequest, config?: AxiosRequestConfig): Promise<operations.RegisterContainerImageResponse>;
    /**
     * releaseStaticIp - Deletes a specific static IP from your account.
    **/
    releaseStaticIp(req: operations.ReleaseStaticIpRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseStaticIpResponse>;
    /**
     * resetDistributionCache - <p>Deletes currently cached content from your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>After resetting the cache, the next time a content request is made, your distribution pulls, serves, and caches it from the origin.</p>
    **/
    resetDistributionCache(req: operations.ResetDistributionCacheRequest, config?: AxiosRequestConfig): Promise<operations.ResetDistributionCacheResponse>;
    /**
     * sendContactMethodVerification - <p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>
    **/
    sendContactMethodVerification(req: operations.SendContactMethodVerificationRequest, config?: AxiosRequestConfig): Promise<operations.SendContactMethodVerificationResponse>;
    /**
     * setIpAddressType - <p>Sets the IP address type for an Amazon Lightsail resource.</p> <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</p>
    **/
    setIpAddressType(req: operations.SetIpAddressTypeRequest, config?: AxiosRequestConfig): Promise<operations.SetIpAddressTypeResponse>;
    /**
     * setResourceAccessForBucket - <p>Sets the Amazon Lightsail resources that can access the specified Lightsail bucket.</p> <p>Lightsail buckets currently support setting access for Lightsail instances in the same AWS Region.</p>
    **/
    setResourceAccessForBucket(req: operations.SetResourceAccessForBucketRequest, config?: AxiosRequestConfig): Promise<operations.SetResourceAccessForBucketResponse>;
    /**
     * startInstance - <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    startInstance(req: operations.StartInstanceRequest, config?: AxiosRequestConfig): Promise<operations.StartInstanceResponse>;
    /**
     * startRelationalDatabase - <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    startRelationalDatabase(req: operations.StartRelationalDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.StartRelationalDatabaseResponse>;
    /**
     * stopInstance - <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-create-static-ip">Amazon Lightsail Developer Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    stopInstance(req: operations.StopInstanceRequest, config?: AxiosRequestConfig): Promise<operations.StopInstanceResponse>;
    /**
     * stopRelationalDatabase - <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    stopRelationalDatabase(req: operations.StopRelationalDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.StopRelationalDatabaseResponse>;
    /**
     * tagResource - <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags">Amazon Lightsail Developer Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * testAlarm - <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
    **/
    testAlarm(req: operations.TestAlarmRequest, config?: AxiosRequestConfig): Promise<operations.TestAlarmResponse>;
    /**
     * unpeerVpc - Unpeers the Lightsail VPC from the user's default VPC.
    **/
    unpeerVpc(req: operations.UnpeerVpcRequest, config?: AxiosRequestConfig): Promise<operations.UnpeerVpcResponse>;
    /**
     * untagResource - <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateBucket - <p>Updates an existing Amazon Lightsail bucket.</p> <p>Use this action to update the configuration of an existing bucket, such as versioning, public accessibility, and the AWS accounts that can access the bucket.</p>
    **/
    updateBucket(req: operations.UpdateBucketRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBucketResponse>;
    /**
     * updateBucketBundle - <p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket. You can update a bucket's bundle only one time within a monthly AWS billing cycle. To determine if you can update a bucket's bundle, use the <a>GetBuckets</a> action. The <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can currently update a bucket's bundle.</p> <p>Update a bucket's bundle if it's consistently going over its storage space or data transfer quota, or if a bucket's usage is consistently in the lower range of its storage space or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might experience, we strongly recommend that you update a bucket's bundle only as a long-term strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle that will provide the bucket with ample storage space and data transfer for a long time to come.</p>
    **/
    updateBucketBundle(req: operations.UpdateBucketBundleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBucketBundleResponse>;
    /**
     * updateContainerService - Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.
    **/
    updateContainerService(req: operations.UpdateContainerServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContainerServiceResponse>;
    /**
     * updateDistribution - <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p> <p>Use this action to update the configuration of your existing distribution.</p>
    **/
    updateDistribution(req: operations.UpdateDistributionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDistributionResponse>;
    /**
     * updateDistributionBundle - <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN) distribution.</p> <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of your dsitribution.</p> <p>Update your distribution's bundle if your distribution is going over its monthly network transfer quota and is incurring an overage fee.</p> <p>You can update your distribution's bundle only one time within your monthly AWS billing cycle. To determine if you can update your distribution's bundle, use the <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the result will indicate whether you can currently update your distribution's bundle.</p>
    **/
    updateDistributionBundle(req: operations.UpdateDistributionBundleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDistributionBundleResponse>;
    /**
     * updateDomainEntry - <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    updateDomainEntry(req: operations.UpdateDomainEntryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainEntryResponse>;
    /**
     * updateLoadBalancerAttribute - <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    updateLoadBalancerAttribute(req: operations.UpdateLoadBalancerAttributeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLoadBalancerAttributeResponse>;
    /**
     * updateRelationalDatabase - <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    updateRelationalDatabase(req: operations.UpdateRelationalDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRelationalDatabaseResponse>;
    /**
     * updateRelationalDatabaseParameters - <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
    **/
    updateRelationalDatabaseParameters(req: operations.UpdateRelationalDatabaseParametersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRelationalDatabaseParametersResponse>;
}
export {};
